import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";

export default function WithUser(AAA) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dupa: "zupa",
      };
    }
    render() {
        return (
            <AAA>

            </AAA>
        )
    }
  };
}
