export function getInitials(fullName) {
  const names = fullName.split(" ");
  const initials = names.slice(0, 2).map((name) => name[0].toUpperCase());
  const initialsStr = initials.join("");
  return initialsStr;
}

export const PRIOTITYSTYELS = {
  high: "text-red-700",
  medium: "text-yellow-500",
  low: "text-pink-600",
};

export const TASK_TYPE = {
  todo: "bg-red-700",
  "in progress": "bg-purple-800",
  completed: "bg-green-800",
};

export const BGS = [
  "bg-fuchsia-800",
  "bg-purple-700",
  "bg-pink-600",
  "bg-rose-500",
];

export const formatDate = (date) => {
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

export function dateFormatter(dateString) {
  const inputDate = new Date(dateString);
  if (isNaN(inputDate)) {
    return "Invalid Date";
  }
  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, "0");
  const day = String(inputDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}