class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    .navbar {
      background-color: #FFB69F;
    }
    h2 {
      font-size: 22px;
      padding: 10px 0 0 0;
      margin-left: 20px;
      color: white;
      font-family: poppins;
      font-weight: 600;
      text-align: center;
    }
    </style>
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <h2>Nonton Yuk!</h2>
      </div>
    </div>
  </nav>
    `;
  }
}

customElements.define("app-bar", AppBar);
