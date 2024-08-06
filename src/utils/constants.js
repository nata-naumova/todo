const date = new Date();
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

export const formattedDate = new Intl.DateTimeFormat("ru-RU", options).format(
  date
);
