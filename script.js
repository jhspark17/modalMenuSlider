// const btn = document.getElementById("btn");
// const modal = document.getElementById("myModal")
// const closeModal = document.getElementById('close-modal');





// btn.addEventListener('click', () => {
//   modal.style.display = "block"
// })

// closeModal.addEventListener('click', () => {
//   modal.style.display = "none"
// })

var restoreIpAddresses = function(s) {
  const res = [];
  
  const backtrack = (temp, str) => {
    if (temp.length > 4) return;
    if (!str.length && temp.length === 4) {
      res.push(temp.join("."));
      return;
    }
    
    for (let i = 0; i < str.length; i++) {
      let vis = str.slice(0, i + 1);
      if (vis[0] === "0" && vis.length > 1) continue;
      vis = parseInt(vis);
      if (vis > 255 || vis < 0) continue;
      backtrack([...temp, vis], str.slice(i + 1));
    }
  }
  
  backtrack([], s);
  return res;
};


console.log(restoreIpAddresses("010010"))