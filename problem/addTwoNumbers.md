## 两数相加

<h2 style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; border-bottom: 2px solid rgb(239, 112, 96); font-size: 1.3em;" data-id="heading-1"><span style="display: none;" class="prefix"></span><span style="display: inline-block; font-weight: bold; background: rgb(239, 112, 96); color: #ffffff; padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;" class="content">问题描述</span><span class="suffix"></span><span style="display: inline-block; vertical-align: bottom; border-bottom: 36px solid #efebe9; border-right: 20px solid transparent;"> </span></h2>

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

**示例:**

```js
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

<h2 style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; border-bottom: 2px solid rgb(239, 112, 96); font-size: 1.3em;" data-id="heading-1"><span style="display: none;" class="prefix"></span><span style="display: inline-block; font-weight: bold; background: rgb(239, 112, 96); color: #ffffff; padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;" class="content">求解</span><span class="suffix"></span><span style="display: inline-block; vertical-align: bottom; border-bottom: 36px solid #efebe9; border-right: 20px solid transparent;"> </span></h2>

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode(0) // 设置链表开头为0的节点
  let cur = dummy
  let carry = 0 // 进位
  while (l1 != null || l2 != null) {
    let d1 = l1 == null ? 0 : l1.val
    let d2 = l2 == null ? 0 : l2.val
    const sum = d1 + d2 + carry // 两数对应位和进位相加
    carry = Math.floor(sum / 10) // 计算进位
    cur.next = new ListNode(sum % 10)
    cur = cur.next
    if (l1 != null) l1 = l1.next
    if (l2 != null) l2 = l2.next
  }
  if (carry > 0) cur.next = new ListNode(carry)
  return dummy.next // return为0节点后的一个节点即为开始节点
}
```

<h2 style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; border-bottom: 2px solid rgb(239, 112, 96); font-size: 1.3em;" data-id="heading-1"><span style="display: none;" class="prefix"></span><span style="display: inline-block; font-weight: bold; background: rgb(239, 112, 96); color: #ffffff; padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;" class="content">执行结果</span><span class="suffix"></span><span style="display: inline-block; vertical-align: bottom; border-bottom: 36px solid #efebe9; border-right: 20px solid transparent;"> </span></h2>

```js
执行用时 :132 ms, 在所有 JavaScript 提交中击败了70.21%的用户
内存消耗 :38.6 MB, 在所有 JavaScript 提交中击败了80.88%的用户
```

| 提交结果 | 执行用时 | 内存消耗 |
|:------:|:------:|:-------:|
|   通过  | 132ms  |  38.6MB |
