// Since we don't set a beacon_url, we'll just subscribe to the before_beacon function
// and print the results into the browser itself.
BOOMR.subscribe('before_beacon', function(o) {
	var html = "";
	if(o.t_done) { html += "This page took " + o.t_done + "ms to load<br>"; }
	if(o.bw) { html += "Your bandwidth to this server is " + parseInt(o.bw/1024) + "kbps (±" + parseInt(o.bw_err*100/o.bw) + "%)<br>"; }
	if(o.lat) { html += "Your latency to this server is " + parseInt(o.lat) + "±" + o.lat_err + "ms<br>"; }

	document.getElementById('results').innerHTML = html;
});
