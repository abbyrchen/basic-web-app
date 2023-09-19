export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.toLowerCase().includes("andrew")) {
    return (
      "archen"
    );
  }
  else if (query.toLowerCase().includes("name")) {
    return (
      "Abby"
    );
  }
  else if (query.toLowerCase().includes("plus")) {
    const phrase = query.split(' ')
    const index = phrase.indexOf("plus")
    const sum = parseInt(phrase[index - 1]) + parseInt(phrase[index + 1])
    return (
      sum.toString()
    );
  }

  else if (query.toLowerCase().includes("multiplied")) {
    const phrase = query.split(' ')
    const index = phrase.indexOf("multiplied")
    const product = parseInt(phrase[index - 1]) + parseInt(phrase[index + 2])
    return (
      product.toString()
    );
  }

  return "";
}
