var e=document.querySelector("table"),r=e.querySelectorAll("th"),t=e.querySelector("tbody");r.forEach(function(e,n){e.addEventListener("click",function(){!function(e){Array.from(t.querySelectorAll("tr")).sort(function(t,n){var l=t.cells[e].innerText,a=n.cells[e].innerText;return"Age"===r[e].innerText?parseInt(l)-parseInt(a):"Salary"===r[e].innerText?parseFloat(l.replace(/[$,]/g,""))-parseFloat(a.replace(/[$,]/g,"")):l.localeCompare(a)}).forEach(function(e){return t.appendChild(e)})}(n)})});
//# sourceMappingURL=index.4bf3fe73.js.map
