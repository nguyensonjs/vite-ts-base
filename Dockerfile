# Sử dụng node làm base image
FROM node:18-alpine AS builder

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy file package.json và yarn.lock vào container
COPY package.json yarn.lock ./

# Cài đặt dependencies
RUN yarn

# Copy toàn bộ mã nguồn vào container
COPY . .

# Build dự án Vite
RUN yarn run build

# Sử dụng Nginx để phục vụ ứng dụng
FROM nginx:alpine

# Copy file build từ giai đoạn builder vào thư mục public của Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 để có thể truy cập ứng dụng
EXPOSE 80

# Chạy Nginx
CMD ["nginx", "-g", "daemon off;"]
