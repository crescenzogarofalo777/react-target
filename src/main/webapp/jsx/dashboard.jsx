class Card extends React.Component {

    constructor(props) {
        super(props);
        this.caption = "";
        this.captionIcon = ""; 
        this.width = "12";
    }

    render() {
        return (
            <div class={"col-lg-" + this.props.width +" thumbnail"}>
                <div class="caption">
                <div class="col-lg-12">
                    <span class={"glyphicon " + this.props.captionIcon}></span>
                    <span class="margin-left-5 text-primary">{this.props.caption}</span>
                </div>
                </div>
            </div>
        );
    }

}
  
class Dashboard extends React.Component {
    render() {
        return (
        <div class="row">
            <div class="col-xs-12">
                <Card 
                    width="8"
                    captionIcon="glyphicon-search"
                    caption="Ricerca Soggetto">
                </Card>
                <Card 
                    width="4"
                    captionIcon="glyphicon-th-list"
                    caption="Elenco Report">
                </Card>
            </div>      
        </div>
        );
    }
}

ReactDOM.render(
    <Dashboard />,
    document.getElementById('idDashboard')
);