package application_test

import (
	"testing"

	"github.com/DiogoMarcel/estudos/fc/devops/arquitetura-hexagonal-go/application"
	uuid "github.com/satori/go.uuid"
	"github.com/stretchr/testify/require"
)

func TestApplicationProductEnabled(t *testing.T) {
	product := application.Product{}
	product.Name = "Hello"
	product.Status = application.DISABLED
	product.Price = 10

	err := product.Enabled()
	require.Nil(t, err)

	product.Price = 0
	err = product.Enabled()
	require.Equal(t, application.PRICE_ZERO, err.Error())
}

func TestApplicationProductDisabled(t *testing.T) {
	product := application.Product{}
	product.Name = "Hello"
	product.Status = application.DISABLED
	product.Price = 0

	err := product.Disabled()
	require.Nil(t, err)

	product.Price = 10
	err = product.Disabled()
	require.Equal(t, application.PRICE_NOT_ZERO, err.Error())
}

func TestApplicationProductIsValid(t *testing.T) {
	product := application.Product{}
	product.ID = uuid.NewV4().String()
	product.Name = "hello"
	product.Status = application.DISABLED
	product.Price = 10

	_, err := product.IsValid()
	require.Nil(t, err)

	product.Status = application.INVALID_STATUS
	_, err = product.IsValid()
	require.Equal(t, application.STATUS_NOT_VALID, err.Error())

	product.Status = application.ENABLED
	_, err = product.IsValid()
	require.Nil(t, err)

	product.Price = -10
	_, err = product.IsValid()
	require.Equal(t, application.PRICE_NOT_VALID, err.Error())
}
