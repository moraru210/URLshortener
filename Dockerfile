FROM golang:1.18.2-alpine3.16

RUN mkdir /app

ADD . /app

WORKDIR /app

RUN go mod download

RUN go build -o ./src/main ./src

CMD ["/app/src/main"]
