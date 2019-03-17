import * as d3 from "d3";

// Create a curved (diagonal) path from parent to the child nodes
function diagonal(s, d) {
  const path = `M ${s.x} ${s.y}
        C ${(s.x + d.x) / 2} ${s.y},
          ${(s.x + d.x) / 2} ${d.y},
          ${d.x} ${d.y}`;

  return path;
}

export class D3Tree {
  constructor(treeData, htmlRef) {
    // Data
    this.data = treeData;

    // Set dimensions and margins for diagram
    this.config = {
      margin: { top: 80, bottom: 80 },
      width: 600,
      height: 400 - 80 /* this.margin.top */ - 80 /*this.margin.bottom*/,
      duration: 750
    };

    this.htmlRef = htmlRef;
    this.element = this.createSvg();
    this.treeMap = d3.tree().size([this.config.width, this.config.height]); // Declares a tree layout and assigns the size
    this.createRoot();
  }

  createSvg = () => {
    // append the svg object to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    return d3
      .select(this.htmlRef)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%") //height + margin.top + margin.bottom)
      .attr("viewBox", "0 0 600 350")
      .attr("style", "border: 2px solid black")
      .append("g")
      .attr("transform", "translate(0," + this.config.margin.top + ")");
  };

  createRoot = () => {
    // Assigns parent, children, height, depth
    let root = d3.hierarchy(this.data, function(d) {
      return d.children;
    });

    root.x0 = this.config.width / 2;
    root.y0 = 0;

    this.update(root);
  };

  // Toggle children on click
  click = d => {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    this.update(d);
  };

  collapse = d => {
    // Collapse the node and all it's children
    if (d.children) {
      d._children = d.children;
      d._children.forEach(this.collapse);
      d.children = null;
    }
  };

  update = root => {
    // Assigns the x and y position for the nodes
    const treeData = this.treeMap(root);

    // Compute the new tree layout.
    let nodes = treeData.descendants();
    let links = treeData.descendants().slice(1);

    // Normalize for fixed-depth
    nodes.forEach(function(d) {
      d.y = d.depth * 100;
    });

    // **************** Nodes Section ****************

    // Update the nodes...
    let i = 0;
    var node = this.element.selectAll("g.node").data(nodes, function(d) {
      return d.id || (d.id = ++i);
    });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", function() {
        return "translate(" + root.x0 + "," + root.y0 + ")";
      })
      .on("click", this.click);

    // Add Circle for the nodes
    nodeEnter
      .append("circle")
      .attr("class", "node")
      .attr("r", 1e-6)
      .style("fill", function(d) {
        return d._children ? "lightsteelblue" : "#fff";
      });

    // Add labels for the nodes
    nodeEnter
      .append("text")
      .attr("dy", ".35em")
      .attr("x", function(d) {
        return d.children || d._children ? -13 : 13;
      })
      .attr("text-anchor", function(d) {
        return d.children || d._children ? "end" : "start";
      })
      .text(function(d) {
        return d.data.value;
      });

    // Update
    var nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the nodes
    nodeUpdate
      .transition()
      .duration(this.config.duration)
      .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
      });

    // Update the node attributes and style
    nodeUpdate
      .select("circle.node")
      .attr("r", 10)
      .style("fill", function(d) {
        return d._children ? "lightsteelblue" : "#fff";
      })
      .attr("cursor", "pointer");

    // Remove any exiting nodes
    var nodeExit = node
      .exit()
      .transition()
      .duration(this.config.duration)
      .attr("transform", function() {
        return "translate(" + root.x + "," + root.y + ")";
      })
      .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select("circle").attr("r", 1e-6);

    // On exit reduce the opacity of text lables
    nodeExit.select("text").style("fill-opacity", 1e-6);

    // **************** Links Section ****************

    // Update the links...
    var link = this.element.selectAll("path.link").data(links, function(d) {
      return d.id;
    });

    // Enter any new links at the parent's previous position
    var linkEnter = link
      .enter()
      .insert("path", "g")
      .attr("class", "link")
      .attr("d", function() {
        var o = { x: root.x0, y: root.y0 };
        return diagonal(o, o);
      });

    // Update
    var linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate
      .transition()
      .duration(this.config.duration)
      .attr("d", function(d) {
        return diagonal(d, d.parent);
      });

    // Remove any existing links
    // eslint-disable-next-line no-unused-vars
    var linkExit = link
      .exit()
      .transition()
      .duration(this.config.duration)
      .attr("d", function() {
        // eslint-disable-next-line no-unused-vars
        var o = { x: root.x, y: root.y };
      })
      .remove();

    // Store the old positions for transition.
    nodes.forEach(function(d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  };
}
