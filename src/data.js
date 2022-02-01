const users = [
  { name: "a", premium: true },
  { name: "b", premium: false },
  { name: "c", premium: true },
  { name: "d", premium: true },
  { name: "e", premium: false },
  { name: "f", premium: false },
];

export const getPremiumUsers = (users) => {
    return users.filter(user => user.premium)
}

//only 1 default exportper file is allowed

export default users

//alt way of exporting
// export {getPremiumUsers, users as default}