import React from "react";
import "../../assets/css/terminal.css";

class Term extends React.PureComponent {
  state = {
    termOutput: "",
  };

  componentDidMount() {
    let eventSource = new EventSource(
      process.env.REACT_APP_API_BASE_URL +
        "/sse/build?id=" +
        this.props.match.params.buildId
    );
    eventSource.onmessage = (e) => {
      console.log("DATA FROM EFFECT??", this.state);

      this.setState({ termOutput: this.state.termOutput + e.data });
      window.scrollTo(0, this.bottom.scrollHeight);
    };

    eventSource.onerror = (e) => {
      if (e.eventPhase == EventSource.CLOSED) {
        console.log("close??", e);
        eventSource.close();
      }
    };
  }

  render() {
    return (
      <div
        style={{
          margin: 30,
        }}
        ref={(el) => {
          this.bottom = el;
        }}
      >
        <h1>BUILD # {this.props.match.params.buildId}</h1>
        <div
          style={{
            minHeight: "100vh",
            backgroundColor: "#171717",
            border: "1px solid #e14eca",
            borderRadius: 5,
          }}
        >
          <span
            style={{
              fontSize: 14,
              color: "#e14eca",
              padding: 18,
              position: "absolute",
            }}
          >
            Starting Build #{this.props.match.params.buildId}
          </span>
          <div
            className="term-container"
            dangerouslySetInnerHTML={{ __html: this.state.termOutput }}
          />
        </div>
      </div>
    );
  }
}

export default Term;
