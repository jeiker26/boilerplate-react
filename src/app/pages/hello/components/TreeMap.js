import React from "react";
import { D3Tree } from "src/app/pages/hello/components/D3Tree";

export class TreeMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        value: 25,
        children: [
          {
            value: 10,
            parent: 25,
            children: [
              {
                value: 7,
                parent: 10,
                children: [
                  {
                    value: "vv",
                    parent: 7
                  },
                  {
                    value: "jj",
                    parent: 7
                  }
                ]
              },
              {
                value: 15,
                parent: 10
              }
            ]
          },
          {
            value: 50,
            parent: 25
          }
        ]
      }
    };
  }

  componentDidMount() {
    new D3Tree(this.state.data, this.nodeRef);
  }

  shouldComponentUpdate() {
    // Suspendemos los renders de React.
    return false;
  }

  nodeRef = null;
  setRef = ref => {
    this.nodeRef = ref;
  };

  render() {
    return <div ref={this.setRef}>Tree map</div>;
  }
}
