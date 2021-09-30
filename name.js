
document.getElementById('1stsem').onsubmit = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const branch = urlParams.get('br');
    var i = 0;
    if (branch==1){
      i=1;
    }
    else if (branch==2) {
      i=2;
    }
    const tc=24;
    var sum=0;
    var sqpa;
    const credits = [4,4,4,4,4,2,2,0];
    const sub = ["18MAT11", "18PHY12", "18ELE13", "18CIV14", "18EGDL15", "18PHYL16", "18ELEL17", "18EGH18"];
    sub.forEach(myFunction);

    function myFunction(value, index, array) {
      var g = document.getElementById(value).value;
      if (g >=90){
        sum+=10*credits[index];
      }
      else if (g >=80){
        sum+=9*credits[index];
      }
      else if (g >=70){
        sum+=8*credits[index];
      }
      else if (g >=60){
        sum+=7*credits[index];
      }
      else if (g >=45){
        sum+=6*credits[index];
      }
      else if (g >=40){
        sum+=4*credits[index];
      }
      else{
        sum+=0;
      }
    }
    sgpa = sum/tc;
    document.getElementById('sgpa').value = sgpa.toFixed(2);
    percentage = (sgpa-0.75)*10;
    document.getElementById('percentage').value = percentage.toFixed(2);
    return false;
};



    $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: false
                },
                900: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: false,
                    margin: 20
                }
            }
        })
    })



    document.getElementById('2ndsem').onsubmit = function() {
        const urlParams = new URLSearchParams(window.location.search);
        const branch = urlParams.get('br');
        const tc=24;
        var sum=0;
        var sqpa;
        const credits = [4,4,4,4,4,2,2,0];
        const sub = ["18MAT21", "18XXX22", "18XXX23", "18XXX24", "18XXX25", "18XXL26", "18XXL27", "18XXX28"];
        sub.forEach(myFunction);

        function myFunction(value, index, array) {
          var g = document.getElementById(value).value;
          if (g >=90){
            sum+=10*credits[index];
          }
          else if (g >=80){
            sum+=9*credits[index];
          }
          else if (g >=70){
            sum+=8*credits[index];
          }
          else if (g >=60){
            sum+=7*credits[index];
          }
          else if (g >=45){
            sum+=6*credits[index];
          }
          else if (g >=40){
            sum+=4*credits[index];
          }
          else{
            sum+=0;
          }
        }
        sgpa = sum/tc;
        document.getElementById('sgpa').value = sgpa.toFixed(2);
        percentage = (sgpa-0.75)*10;
        document.getElementById('percentage').value = percentage.toFixed(2);
        return false;
    };
    document.getElementById('3rdsem').onsubmit = function() {
        const urlParams = new URLSearchParams(window.location.search);
        const branch = urlParams.get('br');
        const tc=28;
        var sum=0;
        var sqpa;
        const credits = [[4,4,4,4,4,3,2,2,1],//ae *
                         [4,4,4,4,4,3,2,2,1],//au
                         [4,4,4,4,4,3,2,2,1],//bm
                         [4,4,4,4,3,4,2,2,1],//bt
                         [4,3,4,4,4,4,2,2,1],//ec pending
                         [4,4,4,4,3,4,2,2,1],//ch
                         [4,4,4,4,3,4,2,2,1],//cv
                         [4,4,4,4,3,4,2,2,1],//cs
                         [4,4,4,4,3,4,2,2,1],//ct
                         [4,3,4,4,4,4,2,2,1],//ec pending
                         [4,4,4,4,4,3,2,2,1],//ee
                         [4,3,4,4,4,4,2,2,1],//ec
                         [4,3,4,4,4,4,2,2,1],//ec pending *
                         [4,4,4,4,4,3,2,2,1],//im/ip
                         [4,4,4,4,3,4,2,2,1],//im/ip
                         [4,4,4,4,3,4,2,2,1],//is
                         [4,3,4,4,4,4,2,2,1],//ec pending
                         [4,3,4,4,4,4,2,2,1],//ec pending
                         [4,4,4,4,4,3,2,2,1],//me
                         [4,4,4,4,4,3,2,2,1],//mt
                         [4,4,4,4,4,3,2,2,1],//ml
                         [4,4,4,4,4,3,2,2,1],//mn
                         [4,3,4,4,4,4,2,2,1],//ec pending
                         [4,3,4,4,4,4,2,2,1],//ec pending
                         [4,4,3,4,4,2,2,2,1],//tx
                         [4,3,4,4,4,4,2,2,1],//ec
                         [4,4,3,4,4,2,2,2,1],//tx
                         [4,3,4,4,4,4,2,2,1],//ec pending
                         [4,3,4,4,4,4,2,2,1]];//ec pending
        const sub = ["18MAT31", "18XX32", "18XX33", "18XX34", "18XX35", "18XX36", "18XXL37", "18XXL38", "18KL/CPH39"];
        sub.forEach(myFunction);

        function myFunction(value, index, array) {
          var g = document.getElementById(value).value;
          if (value=="17KL/CPH39"){
            g = g*2;
          }
          if (g >=90){
            sum+=10*credits[branch-1][index];
          }
          else if (g >=80){
            sum+=9*credits[branch-1][index];
          }
          else if (g >=70){
            sum+=8*credits[branch-1][index];
          }
          else if (g >=60){
            sum+=7*credits[branch-1][index];
          }
          else if (g >=45){
            sum+=6*credits[index];
          }
          else if (g >=40){
            sum+=4*credits[index];
          }
          else{
            sum+=0;
          }
        }
        sgpa = sum/tc;
        document.getElementById('sgpa').value = sgpa.toFixed(2);
        percentage = (sgpa-0.75)*10;
        document.getElementById('percentage').value = percentage.toFixed(2);
        return false;
    };
    document.getElementById('4thsem').onsubmit = function() {
        const urlParams = new URLSearchParams(window.location.search);
        const branch = urlParams.get('br');
        const tc=28;
        var sum=0;
        var sqpa;
        const credits = [[4,4,4,4,4,3,2,2,1],//ae
                         [4,4,4,4,4,3,2,2,1],//au
                         [4,4,4,4,4,3,2,2,1],//bm
                         [4,3,4,4,4,4,2,2,1],//bt
                         [4,3,4,4,4,4,2,2,1],//ec pending
                         [4,3,4,4,4,4,2,2,1],//ch
                         [4,3,4,4,4,4,2,2,1],//cv
                         [4,3,4,4,4,4,2,2,1],//cs
                         [4,4,4,4,4,3,2,2,1],//ct
                         [4,3,4,4,4,4,2,2,1],//ec pending
                         [4,4,4,4,4,3,2,2,1],//ee
                         [4,4,4,4,4,3,2,2,1],//ec
                         [4,3,4,4,4,4,2,2,1],//ec
                         [4,4,4,4,4,3,2,2,1],//im/ip
                         [4,3,4,4,4,4,2,2,1],//im/ip
                         [4,3,4,4,4,4,2,2,1],//is
                         [4,3,4,4,4,4,2,2,1],//ec
                         [4,3,4,4,4,4,2,2,1],//ec
                         [4,4,4,4,4,3,2,2,1],//me
                         [4,4,4,4,4,3,2,2,1],//mt
                         [4,4,4,4,4,3,2,2,1],//ml
                         [4,4,4,4,4,3,2,2,1],//mn
                         [4,3,4,4,4,4,2,2,1],//ec pending
                         [4,3,4,4,4,4,2,2,1],//ec pending
                         [4,4,3,4,4,2,2,2,1],//tx
                         [4,4,4,4,4,3,2,2,1],//ec
                         [4,4,3,4,4,2,2,2,1],//tx
                         [4,3,4,4,4,4,2,2,1],//ec
                         [4,3,4,4,4,4,2,2,1]];
        const sub = ["18MAT41", "18XX42", "18XX43", "18XX44", "18XX45", "18XX46", "18XXL47", "18XXL48", "18KL/CPH49"];
        sub.forEach(myFunction);

        function myFunction(value, index, array) {
          var g = document.getElementById(value).value;
          if (value=="17KL/CPH49"){
            g = g*2;
          }
          if (g >=90){
            sum+=10*credits[branch-1][index];
          }
          else if (g >=80){
            sum+=9*credits[branch-1][index];
          }
          else if (g >=70){
            sum+=8*credits[branch-1][index];
          }
          else if (g >=60){
            sum+=7*credits[branch-1][index];
          }
          else if (g >=45){
            sum+=6*credits[index];
          }
          else if (g >=40){
            sum+=4*credits[index];
          }
          else{
            sum+=0;
          }
        }
        sgpa = sum/tc;
        document.getElementById('sgpa').value = sgpa.toFixed(2);
        percentage = (sgpa-0.75)*10;
        document.getElementById('percentage').value = percentage.toFixed(2);
        return false;
    };
    document.getElementById('5thsem').onsubmit = function() {
      const urlParams = new URLSearchParams(window.location.search);
      const branch = urlParams.get('br');
      const tc=26;
      var sum=0;
      var sqpa;
      const credits = [4,4,4,4,3,3,2,2];
      const sub = ["18XX51", "18XX52", "18XX53", "18XX54", "18XX55x", "18XX56x", "18XXL57", "18XXL58"];
      sub.forEach(myFunction);

      function myFunction(value, index, array) {
        var g = document.getElementById(value).value;
        if (g >=90){
          sum+=10*credits[index];
        }
        else if (g >=80){
          sum+=9*credits[index];
        }
        else if (g >=70){
          sum+=8*credits[index];
        }
        else if (g >=60){
          sum+=7*credits[index];
        }
        else if (g >=45){
          sum+=6*credits[index];
        }
        else if (g >=40){
          sum+=4*credits[index];
        }
        else{
          sum+=0;
        }
      }
      sgpa = sum/tc;
      document.getElementById('sgpa').value = sgpa.toFixed(2);
      percentage = (sgpa-0.75)*10;
      document.getElementById('percentage').value = percentage.toFixed(2);
      return false;
  };
  document.getElementById('6thsem').onsubmit = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const branch = urlParams.get('br');
    const tc=26;
    var sum=0;
    var sqpa;
    const credits = [4,4,4,4,3,3,2,2];
    const sub = ["18XX61", "18XX62", "18XX63", "18XX64", "18XX65x", "18XX66x", "18XXL67", "18XXL68"];
    sub.forEach(myFunction);

    function myFunction(value, index, array) {
      var g = document.getElementById(value).value;
      if (g >=90){
        sum+=10*credits[index];
      }
      else if (g >=80){
        sum+=9*credits[index];
      }
      else if (g >=70){
        sum+=8*credits[index];
      }
      else if (g >=60){
        sum+=7*credits[index];
      }
      else if (g >=45){
        sum+=6*credits[index];
      }
      else if (g >=40){
        sum+=4*credits[index];
      }
      else{
        sum+=0;
      }
    }
    sgpa = sum/tc;
    document.getElementById('sgpa').value = sgpa.toFixed(2);
    percentage = (sgpa-0.75)*10;
    document.getElementById('percentage').value = percentage.toFixed(2);
    return false;
};
document.getElementById('7thsem').onsubmit = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const branch = urlParams.get('br');
  const tc=24;
  var sum=0;
  var sqpa;
  const credits = [4,4,4,3,3,2,2,2];
  const sub = ["17XX71", "17XX72", "17XX73", "17XX74x", "17XX75x", "17XXL76", "17XXL77", "17XXP78"];
  sub.forEach(myFunction);

  function myFunction(value, index, array) {
    var g = document.getElementById(value).value;
    if (g >=90){
      sum+=10*credits[index];
    }
    else if (g >=80){
      sum+=9*credits[index];
    }
    else if (g >=70){
      sum+=8*credits[index];
    }
    else if (g >=60){
      sum+=7*credits[index];
    }
    else if (g >=45){
      sum+=6*credits[index];
    }
    else if (g >=40){
      sum+=4*credits[index];
    }
    else{
      sum+=0;
    }
  }
  sgpa = sum/tc;
  document.getElementById('sgpa').value = sgpa.toFixed(2);
  percentage = (sgpa-0.75)*10;
  document.getElementById('percentage').value = percentage.toFixed(2);
  return false;
};
document.getElementById('8thsem').onsubmit = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const branch = urlParams.get('br');
  const tc=20;
  var sum=0;
  var sqpa;
  const credits = [4,4,2,3,6,1]
  const sub = ["17XX81", "17XX82", "17XX84", "17XX83x", "17XXP85", "17XXS86"];
  sub.forEach(myFunction);

  function myFunction(value, index, array) {
    var g = document.getElementById(value).value;
    if (value=="17XXP85"){
      g = Math.round(g/2);
    }
    if (g >=90){
      sum+=10*credits[index];
    }
    else if (g >=80){
      sum+=9*credits[index];
    }
    else if (g >=70){
      sum+=8*credits[index];
    }
    else if (g >=60){
      sum+=7*credits[index];
    }
    else if (g >=45){
      sum+=6*credits[index];
    }
    else if (g >=40){
      sum+=4*credits[index];
    }
    else{
      sum+=0;
    }
  }
  sgpa = sum/tc;
  document.getElementById('sgpa').value = sgpa.toFixed(2);
  percentage = (sgpa-0.75)*10;
  document.getElementById('percentage').value = percentage.toFixed(2);
  return false;
};
    