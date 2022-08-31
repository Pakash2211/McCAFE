var selectAll = document.querySelectorAll('.check_val');

var btn = document.querySelector("#btn").addEventListener("click", addItem);


function addItem() {
    var imgd = document.querySelectorAll(".imgdiv");

    var conformmassage = confirm("Press ok to conform your order!")

    var conformOrdernot = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (conformmassage) {
                alert("your order conform please Wait")
                resolve();
            } else {
                reject("Order Rejected");
            }
        }, 1000)

    })

    conformOrdernot.then(function() {
        imgd.forEach(function(ele) {
            ele.style.display = "none";
        })
        var orderpart = document.querySelector("#orderid").style.display = "none";
        let item = [];
        selectAll.forEach(function(ele) {
            if (ele.checked == true) {
                item.push(ele.value);
            }
        })
        selectAll.forEach(function(ele) {
            ele.checked = false;
        })


        setTimeout(function() {
            item.forEach(function(ele) {
                var x = document.getElementById(ele);
                x.style.display = "block";

            })
            document.querySelector("#thx").style.display = "block";
        }, 1200);


        var orderpart = document.querySelector("#orderid").style.display = "block";
        var rdm = Math.floor(Math.random() * 10000);
        var num = document.querySelector(".randomId");
        num.innerText = rdm;
    })

    conformOrdernot.catch(function(res) {
        alert(res);
    })
}