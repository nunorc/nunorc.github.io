
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav')
	var instances = M.Sidenav.init(elems, {})

	const time = new File([],'index.html').lastModified,
	      date = new Date(time)

	document.getElementById('modified').innerHTML = `${ date.getDate() }-${ date.getMonth()+1 }-${ date.getFullYear() }`
})
