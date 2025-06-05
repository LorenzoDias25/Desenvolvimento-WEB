function marcar(checkbox) {
      var texto = checkbox.nextElementSibling;
      if (checkbox.checked) {
        texto.style.textDecoration = "line-through";
      } else {
        texto.style.textDecoration = "none";
      }
    }