const thumbs = document.querySelectorAll('.fa-thumbs-up');

thumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    if (thumb.classList.contains('far')) {
      thumb.classList.remove('far');
      thumb.classList.add('fas');
      thumb.style.color = '#742AD2'; // 클릭 시 따봉 색 변경 (예: 파란색)
    } else {
      thumb.classList.remove('fas');
      thumb.classList.add('far');
      thumb.style.color = ''; // 원래 색으로 돌아감
    }

    // 왼쪽 따봉을 클릭하면, 왼쪽에 있는 모든 따봉을 다 채움
    for (let i = 0; i < index; i++) {
      thumbs[i].classList.remove('far');
      thumbs[i].classList.add('fas');
      thumbs[i].style.color = '#742AD2'; // 채워진 따봉 색 변경 (예: 파란색)
    }
  });
});