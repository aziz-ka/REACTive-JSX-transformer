// LIVE JSX TRANSFORMER

var Transformer = React.createClass({
  getInitialState: function() {
    return {
      input: "",
      output: "",
      err: ""
    };
  },

  update: function(e) {
    var code = e.target.value;
    try {
      this.setState({
        output: JSXTransformer.transform(code).code,
        err: ""
      });
    }
    catch(err) {
      this.setState({
        err: err.message
      });
    }
  },

  render: function() {
    const screenWidth = window.innerWidth < 768;

    return (
      <div className="container-fluid">
        <h1 className="text-center">Live JSX Transformer</h1>
        <br/><br/>

        <p className="col-xs-12 alert alert-danger">&nbsp;{this.state.err || "Errors show here"}</p>
        <br/>
        
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <p>JSX goes in...</p>
            <textarea defaultValue={this.state.input} className="col-xs-12 input-lg" onChange={this.update} />
          </div>
          <div className="col-xs-12 col-sm-6">
            {screenWidth ? <br/> : ""}
            <p className={screenWidth ? "text-left" : "text-right"}>JavaScript comes out</p>
            <pre className="input-lg">{this.state.output}</pre>
          </div>
        </div>
      </div>
    );
  }
});

React.render(<Transformer />, document.body);