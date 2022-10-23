const baseUrl = `https://glo3102lab4.herokuapp.com`;

export const createIdUser = async () => {
  const  fetchUserId = await fetch(`${baseUrl}/users`, {
    method: "POST",
  });
  const json = await fetchUserId.json();
  return json.id
};

export const getTasks = (uid) => {
  return fetch(`${baseUrl}/${uid}/tasks`)
    .then((response) => response.json())
    .then((json) => {
      return json.tasks;
    })
    .catch(() => {
      console.error("unable to fetch tasks");
    });
};

export const createTask = (uid,text) => {
  return fetch(`${baseUrl}/${uid}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: text,
    }),
  })
    .then((response) => response.json())
    .then((task) => {
      return task;
    })
    .catch(() => {
      console.error("unable to create tasks");
    });
};
export const updateTask = (uid,taskId,text) => {
  return fetch(`${baseUrl}/${uid}/tasks/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name: text,
    }),
  })
    .then((response) => response.json())
    .then((task) => {
      return task;
    })
    .catch(() => {
      console.error("unable to update tasks");
    });
};

export const deleteTask = (uid,taskId) => {
  return fetch(`${baseUrl}/${uid}/tasks/${taskId}`, {
    method: "DELETE",
  }).catch(() => {
    console.error("unable to delete tasks");
  });
};
