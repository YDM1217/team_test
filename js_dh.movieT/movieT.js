document.addEventListener("DOMContentLoaded", function () {
  const thumbs = document.querySelectorAll('.fa-thumbs-up');

  thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', () => {
          if (thumb.classList.contains('far')) {
              thumb.classList.remove('far');
              thumb.classList.add('fas');
              thumb.style.color = 'blue'; // 따봉 색 변경 (예: 파란색)

              // 왼쪽 따봉을 클릭하면, 왼쪽에 있는 따봉만 채움
              for (let i = 0; i < index; i++) {
                  thumbs[i].classList.remove('far');
                  thumbs[i].classList.add('fas');
                  thumbs[i].style.color = 'blue'; // 왼쪽 따봉 색을 채움 (예: 파란색)
              }
          } else {
              thumb.classList.remove('fas');
              thumb.classList.add('far');
              thumb.style.color = ''; // 따봉 색 제거

              // 오른쪽 따봉을 클릭하면, 해당 따봉 위치부터 끝까지 리셋
              for (let i = index + 1; i < thumbs.length; i++) {
                  thumbs[i].classList.remove('fas');
                  thumbs[i].classList.add('far');
                  thumbs[i].style.color = ''; // 오른쪽 따봉 색을 제거
              }
          }
      });
  });
});


