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
    console.log('description and post id');
    console.log(description);
    console.log(post_id);
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

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);
