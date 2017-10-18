import React, { Component } from "react";
import applyNav from "../../src";
import Form from "react-jsonschema-form";
import conf from "./conf/encounter.json";
import fields from "react-jsonschema-rxnt-extras";

let FormWithNav = applyNav(Form);

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = { formData: conf.formData };
  }

  handleChange = ({ formData }) => {
    console.log(`Data changed ${JSON.stringify(formData)}`);
    this.setState({ formData });
  };

  handleNavChange = (nextTabs, prevTabs) => {
    console.log(`Tab changed`);
    console.log(`From ${prevTabs}`);
    console.log(`To ${nextTabs}`);
  };

  render() {
    let fullConf = Object.assign({ fields }, conf, this.state);
    return (
      <FormWithNav
        {...fullConf}
        liveValidation={true}
        noHtml5Validate={true}
        onSubmit={() => console.log("Submitting form data")}
        onChange={this.handleChange}
        onNavChange={this.handleNavChange}>
        <div className="form-group col-md-12">
          <button className="btn btn-success" type="submit">
            Save
          </button>
        </div>
      </FormWithNav>
    );
  }
}
