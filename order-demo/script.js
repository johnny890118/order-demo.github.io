function myfunction() {
  var buy = document.getElementById("number").value;
  var x = parseInt(buy);
  var str = document.getElementById("name").value;
  var noname = "";
  if (str != noname) {
    if (buy <= 0) {
      alert("煩請輸入訂購數量。");
    } else if (x < 100) {
      alert("抱歉，我們工廠的最低出貨量是 100 件。");
    } else if (x > 5000) {
      alert("抱歉，我們工廠的最高出貨量是 5,000 件。");
    } else {
      var str = document.getElementById("name").value;
      alert(
        str +
          "您好！謝謝您對我們的衣服有興趣！請致電 0987-654-321，會有專人提供您報價！"
      );
      document.getElementById("vipname").textContent = "顧客姓名 : " + str;
      var choose = document.getElementById("menu");
      var index = choose.selectedIndex;
      var bg = choose.options[index].text;
      var str2 = "男裝";
      if (str2 == bg) {
        alert(
          "最近剛好是工廠週年慶，只要您今天來電下單，我們將贈送您帥氣領帶！"
        );
        document.getElementById("money").textContent = "初步估價:" + btotal;
      } else {
        alert(
          "最近剛好是工廠週年慶，只要您今天來電下單，我們將贈送您美麗圍巾！"
        );
      }
      document.getElementById("sex").textContent = "服裝分類 : " + bg;
      var choose2 = document.getElementById("menu2");
      var index2 = choose2.selectedIndex;
      var tshirt = choose2.options[index2].text;
      document.getElementById("kind").textContent = "服裝類型 : " + tshirt;
      var buy = document.getElementById("number").value;
      document.getElementById("many").textContent = "訂購數量 : " + buy;
      var a1 = 600;
      var a2 = 500;
      var btotal = parseInt(buy) * a1;
      var gtotal = parseInt(buy) * a2;
      if (str2 == bg) {
        document.getElementById("money").textContent = "初步估價 : " + btotal;
      } else {
        document.getElementById("money").textContent = "初步估價 : " + gtotal;
      }
    }
  } else {
    alert("煩請填寫您的大名。");
  }
}

function myfunction2() {
  alert("我們工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！");
}
