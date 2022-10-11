const paginate = (users) => {
  const usersPerPage = 15;
  const pages = Math.ceil(users.length / usersPerPage);

  const newUsers = Array.from({ length: pages }, (_, index) => {
    const start = index * usersPerPage;
    return users.slice(start, start + usersPerPage);
  });
  return newUsers;
};

export default paginate;
