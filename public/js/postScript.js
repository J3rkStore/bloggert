const newCommentHandler = async (event) => {
  event.preventDefault();
  console.log('you clicked the button');
  const description = document.querySelector('#comment-name').value.trim();
  //const description = document.querySelector('#comment-name');
  // var descriptionTrue;
  // if (description !== null) {
  //   descriptionTrue = description.value.trim();
  // }
  const post_id = document.querySelector('#post-id').value.trim();

  if (description) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ description, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

const delCommentButtonHandler = async (event) => {
  const post_id = document.querySelector('#post-id').value.trim();
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log('reloading post/', post_id);
      document.location.replace(`/post/${post_id}`);
    } else {
      alert('Failed to delete comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);

document
  .querySelector('.comment-list')
  .addEventListener('click', delCommentButtonHandler);
