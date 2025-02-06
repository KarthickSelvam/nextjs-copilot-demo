const handler = (req, res) => {
  const todos = [
    'Buy groceries',
    'Walk the dog',
    'Read a book',
  ];

  res.status(200).json(todos);
};

export default handler;
