
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav')
	var instances = M.Sidenav.init(elems, {})

	fetch('https://api.github.com/repos/nunorc/nunorc.github.io')
	  .then(response => response.json())
	  .then(data => {
	  	console.log(data)
	  	document.getElementById('modified').innerHTML = data['pushed_at'].split('T')[0]
	  })
})
