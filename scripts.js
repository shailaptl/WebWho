// create an array with nodes
var nodes = new vis.DataSet([
    {id: 1, label: 'Satya Nadella'},
]);

function addMoreUnderSatya() {
    let request = new XMLHttpRequest();
	request.open("get", /who/PeopleStore.asmx/FindPersonContextWithPeers, true);
	request.send();

    request.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
            response = this.responseText;
            console.log(response);
		}
    };
}
            
nodes.add([
   {id: 2, label: 'Rajesh Jha'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'}
  ]);

// create an array with edges
var edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5}
]);

// create a network
var container = document.getElementById('mynetwork');
     
// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {};
       
// initialize your network!
var network = new vis.Network(container, data, options);