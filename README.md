# svg2style 

svg转css样式工具

<svg viewBox="0 0 1024 1024" width="100" height="100">
    <path
      d="M512 901.12c167.8848-117.76 273.2032-222.08 334.8736-314.88-16.7424-129.9968-105.1648-198.0416-182.0672-205.5424-13.1584-1.3056-25.4464-1.92-36.992-1.92-92.416 0-136.7296 39.9616-187.4944 100.48-50.7648-60.416-95.104-100.3776-187.52-100.3776-11.5456 0-23.8336 0.6144-36.992 1.92-35.84 3.5072-74.24 20.224-106.752 50.2528C134.6304 558.3616 242.9952 712.3456 512 901.12z"
      fill="#EE7C3D"
    />
    <path
      d="M699.4944 204.8c8.9344 0 18.688 0.512 29.0304 1.5104 22.7584 2.2272 46.7712 15.1808 65.8432 35.5328 24.704 26.3424 39.8848 63.616 43.9808 107.9552v39.7568c-5.12 56.064-32.1536 116.7616-80.3584 180.5056C703.232 642.56 620.5952 719.7184 512 800.1536c-108.6208-80.4352-191.232-157.696-245.9904-230.0928-48.2048-63.7184-75.2128-124.4416-80.3584-180.5056v-39.7824c4.096-44.3136 19.2768-81.5872 43.9552-107.9296 19.072-20.48 43.0848-33.28 65.8432-35.5328 10.24-0.9984 20.096-1.5104 29.0304-1.5104 36.352 0 54.8608 8.3968 66.944 15.6928 18.9696 11.4944 36.8384 30.5152 57.8048 55.5008L512 350.848l62.7712-74.8544c20.9664-24.9856 38.8096-44.0064 57.8048-55.5008C644.6336 213.1968 663.04 204.8 699.4944 204.8m0-81.92c-92.416 0-136.7296 39.9616-187.4944 100.48C461.2352 162.8416 416.896 122.88 324.48 122.88c-11.5456 0-23.8336 0.6144-36.992 1.92-79.9744 7.68-172.4928 81.0752-183.7568 221.4656v46.7456C114.2272 527.36 215.6288 693.1456 512 901.12c296.3456-207.9744 397.7728-373.76 408.2688-508.1088v-46.7456c-11.2896-140.3904-103.808-213.6576-183.7824-221.4656-13.1584-1.3056-25.4464-1.92-36.992-1.92z"
      fill="#333333"
    />
  </svg>

### 0x00 install

```sh
yarn add --save-dev svg2style

# or

npm install --save-dev svg2style
```

### 0x01 use

```javascript
import svg2style from "svg2style"

const svg = `<svg><path d="M0 0 L0 100 L100 100 L100 0 Z" fill="#FF0000"/></svg>`
const style = svg2style(svg)

console.log(`svg ==> "${svg}"`)
console.log(`style ==> "${style}"`)


// svg ==> "<svg><path d="M0 0 L0 100 L100 100 L100 0 Z" fill="#FF0000"/></svg>"
// style ==> "data:image/svg+xml,%3Csvg width='' height='' viewBox='' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L0 100 L100 100 L100 0 Z' fill='%23ff0000'/%3E%3C/svg%3E"
```

可自行拼接：

```css
background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M512 901.12c167.88-117.76 273.20-222.08 334.87-314.88-16.74-129.00-105.16-198.04-182.07-205.54-13.16-1.31-25.45-1.92-36.99-1.92-92.42 0-136.73 39.96-187.49 100.48-50.76-60.42-95.10-100.38-187.52-100.38-11.55 0-23.83 0.61-36.99 1.92-35.84 3.51-74.24 20.22-106.75 50.25C134.63 558.36 242.00 712.35 512 901.12z' fill='%23ee7c3d'/%3E%3Cpath d='M699.49 204.8c8.93 0 18.69 0.51 29.03 1.51 22.76 2.23 46.77 15.18 65.84 35.53 24.70 26.34 39.88 63.62 43.98 107.96v39.76c-5.12 56.06-32.15 116.76-80.36 180.51C703.23 642.56 620.60 719.72 512 800.15c-108.62-80.44-191.23-157.70-245.99-230.09-48.20-63.72-75.21-124.44-80.36-180.51v-39.78c4.10-44.31 19.28-81.59 43.96-107.93 19.07-20.48 43.08-33.28 65.84-35.53 10.24-0.00 20.10-1.51 29.03-1.51 36.35 0 54.86 8.40 66.94 15.69 18.97 11.49 36.84 30.52 57.80 55.50L512 350.85l62.77-74.85c20.97-24.99 38.81-44.01 57.80-55.50C644.63 213.20 663.04 204.8 699.49 204.8m0-81.92c-92.42 0-136.73 39.96-187.49 100.48C461.24 162.84 416.90 122.88 324.48 122.88c-11.55 0-23.83 0.61-36.99 1.92-79.97 7.68-172.49 81.08-183.76 221.47v46.75C114.23 527.36 215.63 693.15 512 901.12c296.35-207.97 397.77-373.76 408.27-508.11v-46.75c-11.29-140.39-103.81-213.66-183.78-221.47-13.16-1.31-25.45-1.92-36.99-1.92z' fill='%23333333'/%3E%3C/svg%3E");
```

<svg viewBox="0 0 1024 1024" width="100" height="100"><path d="M512 901.12c167.8848-117.76 273.2032-222.08 334.8736-314.88-16.7424-129.9968-105.1648-198.0416-182.0672-205.5424-13.1584-1.3056-25.4464-1.92-36.992-1.92-92.416 0-136.7296 39.9616-187.4944 100.48-50.7648-60.416-95.104-100.3776-187.52-100.3776-11.5456 0-23.8336 0.6144-36.992 1.92-35.84 3.5072-74.24 20.224-106.752 50.2528C134.6304 558.3616 242.9952 712.3456 512 901.12z" fill="#EE7C3D"/><path d="M699.4944 204.8c8.9344 0 18.688 0.512 29.0304 1.5104 22.7584 2.2272 46.7712 15.1808 65.8432 35.5328 24.704 26.3424 39.8848 63.616 43.9808 107.9552v39.7568c-5.12 56.064-32.1536 116.7616-80.3584 180.5056C703.232 642.56 620.5952 719.7184 512 800.1536c-108.6208-80.4352-191.232-157.696-245.9904-230.0928-48.2048-63.7184-75.2128-124.4416-80.3584-180.5056v-39.7824c4.096-44.3136 19.2768-81.5872 43.9552-107.9296 19.072-20.48 43.0848-33.28 65.8432-35.5328 10.24-0.9984 20.096-1.5104 29.0304-1.5104 36.352 0 54.8608 8.3968 66.944 15.6928 18.9696 11.4944 36.8384 30.5152 57.8048 55.5008L512 350.848l62.7712-74.8544c20.9664-24.9856 38.8096-44.0064 57.8048-55.5008C644.6336 213.1968 663.04 204.8 699.4944 204.8m0-81.92c-92.416 0-136.7296 39.9616-187.4944 100.48C461.2352 162.8416 416.896 122.88 324.48 122.88c-11.5456 0-23.8336 0.6144-36.992 1.92-79.9744 7.68-172.4928 81.0752-183.7568 221.4656v46.7456C114.2272 527.36 215.6288 693.1456 512 901.12c296.3456-207.9744 397.7728-373.76 408.2688-508.1088v-46.7456c-11.2896-140.3904-103.808-213.6576-183.7824-221.4656-13.1584-1.3056-25.4464-1.92-36.992-1.92z" fill="#333333"/></svg>