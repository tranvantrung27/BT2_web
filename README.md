# Hướng dẫn trang web Conceit

## Giới thiệu

Đây là trang web Conceit được xây dựng bằng HTML, CSS, và JavaScript với Bootstrap 4. Trang web bao gồm các phần sau:

1. Header với menu điều hướng
2. Slider hình ảnh
3. About Us section
4. Services section 
5. Portfolio section (hiển thị các dự án)
6. Blog section (hiển thị các bài viết mới nhất)
7. Testimonial section (đánh giá từ khách hàng)
8. Footer với thông tin liên hệ và liên kết nhanh

## Cấu trúc thư mục

```
conceit-website/
│
├── index.html                     # File HTML chính
│
├── css/
│   ├── bootstrap.min.css          # Bootstrap CSS
│   ├── font-awesome.min.css       # Font Awesome CSS
│   └── style_1.css                # CSS chính
│
├── js/
│   ├── jquery-3.5.1.min.js        # jQuery
│   ├── popper.min.js              # Popper.js
│   ├── bootstrap.min.js           # Bootstrap JS
│   └── main.js                    # JavaScript tùy chỉnh
│
├── fonts/
│   ├── Raleway-Regular.ttf        # Font Raleway Regular
│   └── Raleway-Bold.ttf           # Font Raleway Bold
│
└── images/
    ├── logo.png                   # Logo header
    ├── logo_bottom.png            # Logo footer
    ├── slider1.png                # Slider image 1
    ├── slider2.png                # Slider image 2
    ├── slider3.png                # Slider image 3
    ├── slider4.png                # Slider image 4
    ├── img_about.png              # About image
    ├── img_project_1.png          # Portfolio image 1
    ├── img_project_2.png          # Portfolio image 2
    ├── img_project_3.png          # Portfolio image 3
    ├── img_project_4.png          # Portfolio image 4
    ├── img_project_5.png          # Portfolio image 5
    ├── img_project_6.png          # Portfolio image 6
    ├── img_project_7.png          # Portfolio image 7
    ├── img_project_8.png          # Portfolio image 8
    ├── blog_1.png                 # Blog image 1
    ├── blog_2.png                 # Blog image 2
    ├── blog_3.png                 # Blog image 3
    ├── bg_testimonial.png         # Testimonial background
    └── img_testimonial.png        # Testimonial image
```

## Cách sử dụng

1. Sao chép tất cả các file và thư mục theo cấu trúc ở trên.
2. Mở file `index.html` trong trình duyệt để xem trang web.

## Tùy chỉnh

### Thay đổi hình ảnh

Để thay đổi hình ảnh, bạn chỉ cần thay thế các file trong thư mục `images/` với hình ảnh của riêng bạn (giữ nguyên tên file).

### Thay đổi nội dung

Để thay đổi nội dung, bạn cần chỉnh sửa file `index.html`. Các phần chính được chia thành các section có comment rõ ràng:

- `<!-- Header Section -->`
- `<!-- Slider Section -->`
- `<!-- About Section -->`
- `<!-- Services Section -->`
- `<!-- Portfolio Section -->`
- `<!-- Blog Section -->`
- `<!-- Testimonial Section -->`
- `<!-- Footer Section -->`

### Thay đổi giao diện

Để thay đổi màu sắc, kích thước, font chữ và các yếu tố CSS khác, bạn cần chỉnh sửa file `css/style_1.css`. File này được chia thành các phần tương ứng với các section trong HTML.

## Các tính năng

1. **Responsive Design**: Trang web hoạt động tốt trên các thiết bị di động, máy tính bảng và máy tính để bàn.
2. **Slider hình ảnh**: Carousel với nhiều hình ảnh và điều khiển.
3. **Portfolio Grid**: Hiển thị các dự án với hiệu ứng hover đẹp mắt.
4. **Blog Section**: Hiển thị các bài viết mới nhất với hình ảnh và nút đọc thêm.
5. **Testimonial Section**: Hiển thị đánh giá từ khách hàng với hình ảnh và đánh giá.
6. **Footer Section**: Hiển thị thông tin liên hệ, liên kết nhanh và biểu tượng mạng xã hội.

## Để dễ bảo trì

Trang web được tổ chức theo cách dễ bảo trì:

1. **HTML**: Các section được phân chia rõ ràng bằng comment.
2. **CSS**: Các style được phân nhóm theo section, dễ tìm và sửa đổi.
3. **JavaScript**: Code JavaScript được tổ chức trong file `main.js`.

Nếu bạn muốn chia nhỏ CSS thành nhiều file hơn, bạn có thể tạo các file CSS riêng cho từng section và import chúng trong file style_1.css:

```css
@import url('header.css');
@import url('slider.css');
@import url('about.css');
@import url('services.css');
@import url('portfolio.css');
@import url('blog.css');
@import url('testimonial.css');
@import url('footer.css');
```

## Lưu ý

- Đảm bảo rằng tất cả các file JavaScript cần thiết (jQuery, Popper.js, Bootstrap) được tải trước khi tải file `main.js`.
- Font Awesome được sử dụng cho các biểu tượng, vì vậy hãy đảm bảo rằng file `font-awesome.min.css` được bao gồm.
- Bootstrap 4 được sử dụng cho layout, vì vậy hãy đảm bảo rằng file `bootstrap.min.css` được bao gồm.
