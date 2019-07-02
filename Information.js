import React from "react";

class Baslik extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      inputValue: ""
    };
  }

  onInputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  onClickEvent = e => {
    const currentVisibility = this.state.isVisible;
    this.setState({
      isVisible: !currentVisibility
    });
  };

  render() {
    return (
      <div>
        <div className="card_a">
          <h1>{this.props.name}</h1>
          <h2>{this.state.inputValue}</h2>
          <p className="aciklama">{this.props.birim}</p>
          <p>{this.props.email}</p>
          <p>
            <button
              id="yolla"
              className="card_button"
              onClick={this.onClickEvent}
            >
              Daha Fazla
            </button>
          </p>

          {this.state.isVisible ? (
            <form
              action={"mailto:" + this.props.email}
              method="post"
              encType="text/plain"
            >
              <br />
              <p className="mesaj">
                <u>
                  <b>Mesaj Konusu</b>
                </u>
              </p>
              <input className="mesaj" type="text" name="Konu" size="18" />
              <br />
              <p className="mesaj">
                <u>
                  <b>Mesaj İçeriği</b>
                </u>
              </p>
              <textarea className="mesaj" type="text" name="Yapilacak Is" />
              <br />
              <br />
              <input className="card_button" type="submit" value="Gonder" />
              <br />
              <input className="card_button" type="reset" value="Sil" />
            </form>
          ) : null}
        </div>
      </div>
    );
  }
}
export default Baslik;
