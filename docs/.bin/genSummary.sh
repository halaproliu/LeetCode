#!/bin/bash
currDir=$(dirname $0)
execDir=$(pwd)
source $currDir/.config
summaryMD=$execDir/SUMMARY.md
kernal=$(uname -a)
os=${kernal%% *}

# 输出目录到目标文件SUMMARY.md
# 参数1：目录名
# 参数2： 菜单排序
function inputCategories() {
    if [ -d $1 ]; then
        fileList=$(ls $1) # 文件列表
        i=0               # 菜单子排序
        fileList=$(echo $fileList | sort)
        echo $fileList
        for filename in $fileList; do
            if [[ $filename != "README.md" ]]; then
                let "i++"
                echo "    * [${filename%.*}](./$1/$filename)" >>$summaryMD
                # if [[ $os == 'Linux' ]]; then
                #     md5name=$(echo $filename | md5sum)
                # else
                #     md5name=$(echo $filename | md5)
                # fi
                # echo "    * [$2.${i} ${filename%.*}](./$1md5/$md5name.md)" >>$summaryMD
            fi
        done
        echo >>$summaryMD
    fi
}

function addHeader() {
    echo '# Summary' >>$summaryMD
    echo >>$summaryMD
    echo '* [Introduction](README.md)' >>$summaryMD
    echo >>$summaryMD
}

rm $summaryMD # 删除目标文件
addHeader
for i in ${!blocks[@]}; do
    let j=i+1
    echo "* [${blocks[$i]}](./${dirs[$i]}/README.md)" >>$summaryMD # 输出标题到目标文件
    inputCategories ${dirs[$i]} $j                                 # 输出目录到目标文件SUMMARY.md
done
