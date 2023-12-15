let timer;

function update() {
  var output = document.getElementById("opt").contentWindow.document;

  output.open();
  output.write(document.getElementById("html").value);
  output.close();
}

function updatee() {
  const output = document.getElementById("opt").contentWindow.document;
  output.open(); // Add this line
  output.write(`<style>${document.getElementById("css").value}</style>`);
  output.close(); // Add this line
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("html").addEventListener("input", function() {
    clearTimeout(timer);
    timer = setTimeout(update, 500);
  });

  document.getElementById("css").addEventListener("input", function() {
    clearTimeout(timer);
    timer = setTimeout(updatee, 500);
  });
});