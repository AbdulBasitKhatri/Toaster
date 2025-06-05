# 🔔 ToasterJS

A lightweight, zero-dependency JavaScript toaster for showing elegant, animated toast messages on any web page. Supports **info**, **success**, **warning**, **error** with built-in animation and dismissal behaviour.

---

## ✨ Features

- ✅ Toast types: `info`, `success`, `warn`, `error`.
- 🎨 Color-coded with animation and progress bar.
- 🖱️ Optional click callback with auto-dismiss.
- 🧽 Removes itself after the timer runs out.
- 🎛️ Max 5 toasts shown at a time.
- 💡 CSS and logic encapsulated just plug and play!

---

## 📦 Usage

### 1. Include the script
```
<script src="toaster.js"></script>
```
### 2. Function Signature
```
toast(type, message, durationInSeconds, onClickCallback, targetSelector);
```
| Param               | Type       | Default    | Description                                           |
| ------------------- | ---------- | ---------- | ----------------------------------------------------- |
| `type`              | `string`   | —          | One of `info`, `success`, `error`, `warn`, or custom. |
| `message`           | `string`   | —          | The text shown inside the toast.                      |
| `durationInSeconds` | `number`   | —          | How long the toast remains visible.                   |
| `onClickCallback`   | `function` | `()=>{}`   | Function to call when the toast is clicked.           |
| `targetSelector`    | `string`   | `.toaster` | DOM selector for custom toast container.              |

### 3. Trigger a toast
```
toast("success", "Operation completed!", 3);
```
### 4. With a click callback
```
toast("info", "Click me to alert", 4, () => {
    alert("Toast clicked!");
});
```

## Example
Download `toaster.js` and `example.html` in the same directory then open `example.html` in your browser to see it in action!
