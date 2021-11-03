# Hahow Quality Engineer 徵才小專案-James
此為面試的小專案，附上作業流程

此專案包含以下內容：
* [專案說明](#專案說明)
* [專案架構](#專案架構)
* [如何使用](#如何使用)
* [API測試](#API測試)
* [UI測試](#UI測試)

## 專案說明

* 此專案使用Cypress工具完成所有的UI和API測試
* 程式語言使用Javascript
* 此專案有新增Plugin，隱蔽Fetch相關的log，整個log畫面比較乾淨

## 專案架構

* API測試的主程式為cypress/integration/api_test_spec.js
* UI測試主程式為cypress/integration/ui_test_spec.js

![](https://i.imgur.com/mQ9vWEA.png)

## 如何使用?
專案下載
```
git clone https://github.com/zang-hao/hahow-project-James.git
```
專案執行
```
npm install --dev
npm run open
```
自動執行Cypress程式，選擇要執行的測試項目

![](https://i.imgur.com/cVH7ZM2.png)

自動進行測試，測試完畢可點選各個Test Case觀看結果

![](https://i.imgur.com/JpFVIUI.png)



## API測試
* URL: https://swapi.dev/
* 相關的限制可以參考網站文件

### 有多少不同種族的人出現在第六部？
* 星際大戰的部數需使用episode_id去選擇
* 使用https://swapi.dev/films 可以發現每部片都有species的property的陣列，
  此陣列的長度為有多少個種族

![](https://i.imgur.com/C4OG7ty.png)

![](https://i.imgur.com/dymEbpa.png)

### 請依據電影集數去排序電影名字？
* 使用https://swapi.dev/films 總共有6個電影物件陣列，根據episode_id去排序由小到大

![](https://i.imgur.com/IS76Ejd.png)

### 請幫我挑出電影裡所有的車輛，馬力超過１０００的。
* 使用https://swapi.dev/api/vehicles/可以發現count為39台，但results只有10台，
有個next的property有url，可以理解為分頁的概念，next到最終的url是null，
* 這邊我使用遞迴，跳脫條件next為null，max_atmosphering_speed>1000為過濾條件

![](https://i.imgur.com/hXp8aUJ.png)

![](https://i.imgur.com/W0ViQDD.png)

## UI測試
URL: https://github.com/hahow/hahow-recruit
### 此專案裡有幾個合作者，並且分別列出他們的名字
* 搜尋文字Contributors的元素Click進入

![](https://i.imgur.com/LBTTKQZ.png)

* 將整個列表的每個li中的text人名提取出來

![](https://i.imgur.com/qRWWa35.png)

![](https://i.imgur.com/I7A9BCF.png)

### 請進入到 frontend.md 並且查看 "Wireframe" 的圖片是否存在

* 假設Wireframe的下面一定有img元素，用visible去判斷是否存在

![](https://i.imgur.com/oLVds5L.png)

![](https://i.imgur.com/490ILDs.png)

### 最後一個 commit 的人是誰
* 搜尋commits的元素click進去，這邊有個bug我使用.click()沒辦法進去，需使用.click().click()
 
![](https://i.imgur.com/MPakktH.png)

* 進到Commits紀錄裡面，搜尋class取第一個的文字

![](https://i.imgur.com/lGqTVNw.png)

![](https://i.imgur.com/wBHgH6O.png)

