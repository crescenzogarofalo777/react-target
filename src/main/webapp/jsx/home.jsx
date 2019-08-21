class Carda extends React.Component {


  constructor(props) {
    super(props);
  }
  
  listaPolizze() {
    
    var polizzelist = this.props.polizze.split(';');
    const res = [];

    if (polizzelist.length > 0) {
      for (var ii=0; ii<polizzelist.length; ii++) {
        res.push(<p class="card-text">{polizzelist[ii]}</p>);
      }
    } else {
      res.push(<p class="card-text">Nessuna polizza da mostrare</p>);
    }
    return res;
  }

  render() {
    return(
      <div class="card">
      <div class="card-body">
        <h5 class="card-title">{this.props.title}</h5>
        {this.listaPolizze()}
      </div>
      <div class="card-footer">
        <small class="text-muted">{this.props.footer}</small>
      </div>
    </div>
    )

  }
}

class Home extends React.Component {
  render() {
    return (
      <div class="card-deck">
        <Carda 
          title="Polizze Recenti"
          polizze="12345678;987654321;88888888;99999999;1111111;2222222;333333"
          footer="Ultimo aggiornamento 12/08/2019">

        </Carda>
      </div>
    );
  }
}



// ========================================

ReactDOM.render(
    <Home />,
    document.getElementById('idHome')
  );