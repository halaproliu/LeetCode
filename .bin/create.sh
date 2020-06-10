#!/bin/bash
execDir=$(pwd)
dist=$execDir/problem/$1.md
echo "# $1" >>$dist
echo >>$dist
echo "### 问题描述" >>$dist
echo >>$dist
echo >>$dist
echo >>$dist
echo "### 求解" >>$dist
echo >>$dist
echo "\`\`\`js" >>$dist
echo >>$dist
echo "\`\`\`" >>$dist
echo >>$dist
echo "### 执行结果" >>$dist
echo >>$dist
echo "\`\`\`js" >>$dist
echo "执行用时 : $2ms, 在所有 JavaScript 提交中击败了$4%的用户">>$dist
echo "内存消耗 : $3MB, 在所有 JavaScript 提交中击败了$5%的用户">>$dist
echo "\`\`\`" >>$dist
echo >>$dist
echo "| 提交结果 | 执行用时 | 内存消耗 |" >> $dist
echo "|:------:|:------:|:-------:|" >> $dist
echo "|   通过  | $2ms  |  $3MB |" >> $dist
