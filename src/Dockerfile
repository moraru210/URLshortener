FROM golang:1.18.2-alpine3.16

RUN mkdir /app

ADD . /app

WORKDIR /app

RUN go mod download

RUN go build -o ./main .

EXPOSE 9808

CMD ["./main"]
