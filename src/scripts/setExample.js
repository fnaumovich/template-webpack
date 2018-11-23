const allowedAdminUsers = new Set(['Naimat', 'Ismat', 'Azat']);

const finalList = new Set();

function addUser({ user, admin }) {
  if (allowedAdminUsers.has(admin) && !finalList.has(user)) {
    return finalList.add(user);
  }

  console.log(`user ${user} is already in the list or isn't allowed`);
}

addUser({ user: "Asep", admin: "Naimat" });
addUser({ user: "John", admin: "Ismat" });

console.log(finalList)
