FROM golang:1.18.2-alpine3.16

RUN mkdir /app

ADD . /app

WORKDIR /app/src

RUN go mod download

RUN go build -o ./main .

CMD ["./main"]
