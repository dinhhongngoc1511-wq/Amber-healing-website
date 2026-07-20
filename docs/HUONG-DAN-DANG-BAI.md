# Hướng dẫn tự đăng bài lên Thư viện Amber

Website sử dụng GitHub Pages và Jekyll. Mỗi bài viết là một tệp Markdown trong thư mục `docs/_posts`.

## Cách đăng một bài mới

1. Đăng nhập GitHub và mở repository `Amber-healing-website`.
2. Mở thư mục `docs/_posts`.
3. Chọn **Add file → Create new file**.
4. Đặt tên theo mẫu: `YYYY-MM-DD-ten-bai-khong-dau.md`.
   Ví dụ: `2026-07-22-vi-sao-toi-cu-phan-ung-nhu-vay.md`.
5. Sao chép mẫu bên dưới, thay nội dung rồi chọn **Commit changes**.
6. Chờ khoảng 1–3 phút; bài sẽ xuất hiện tại `https://amberhealing.vn/library.html`.

## Mẫu bài viết

```markdown
---
title: "Tiêu đề bài viết"
date: 2026-07-22 08:00:00 +0700
category: "Cảm xúc & hệ thần kinh"
description: "Một câu giới thiệu ngắn hiển thị trên trang Thư viện."
author: "Vickki Ngọc"
reading_time: "5 phút đọc"
cover: "/images/ten-anh.jpg"
---

Đoạn mở đầu của bài viết.

<!--more-->

Phần nội dung còn lại của bài.
```

## Chuyên mục nên dùng

- Cảm xúc & hệ thần kinh
- Năng lượng & thiền
- Đá năng lượng
- Góc nhìn Amber

## Thêm ảnh

Tải ảnh lên thư mục `docs/images`, sau đó điền đường dẫn `cover: "/images/ten-anh.jpg"`. Tên tệp nên viết thường, không dấu và dùng dấu gạch ngang.

Nếu chưa quen thao tác, bạn vẫn có thể gửi nội dung và ảnh cho ChatGPT để được biên tập, trình bày và đăng giúp.
