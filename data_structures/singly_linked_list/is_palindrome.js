function isPal(head) {
  let straight = "",
    reversed = "";

  while (head) {
    straight += head.val;
    reversed = head.val + reversed;
    head = head.next;
  }
  return straight === reversed;
}
