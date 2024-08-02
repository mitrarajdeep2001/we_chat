function convertTimestamp(timestamp: number): string {
  const now = new Date();
  const messageDate = new Date(timestamp);

  const diffInMillis = now.getTime() - messageDate.getTime();
  const diffInHours = diffInMillis / (1000 * 60 * 60);

  if (diffInHours <= 24) {
    let hours = messageDate.getHours();
    const minutes = messageDate.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutesStr} ${ampm}`;
  } else if (diffInHours <= 48) {
    return "Yesterday";
  } else {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return messageDate.toLocaleDateString(undefined, options);
  }
}

export default convertTimestamp