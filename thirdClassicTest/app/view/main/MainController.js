/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("thirdClassicTest.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",

  onItemSelected: function (sender, record) {
    Ext.Msg.confirm("Confirm", "Are you sure?", "onConfirm", this);
  },

  onConfirm: function (choice) {
    if (choice === "yes") {
      //
    }
  },

  onUpdateMovie: function (btn) {
    var form = btn.up("window").down("form");
    var formData = form.getValues();
    var store = Ext.getStore("movieApiStore");

    store.load({
      callback: function (success) {
        if (success) {
          var newMovie = {
            movieId: formData.movieId,
            movieName: formData.movieName,
            movieStock: formData.movieStock,
            movieRentStatus: formData.movieRentStatus,
          };
          var record = store.findRecord("movieId", newMovie.movieId);
          if (record) {
            record.set(newMovie);

            store.sync({
              success: function () {
                Ext.Msg.alert("Record updated successfully");
              },
              failure: function () {
                Ext.Msg.alert("Failed to update record");
              },
            });
          } else {
            Ext.Msg.alert("Record not found");
          }
        } else {
          Ext.Msg.alert("Failed to load store");
        }
      },
    });
  },

  onAddMovie: function (btn) {
    var form = btn.up("window").down("form");
    var store = Ext.getStore("movieApiStore");

    var formData = form.getValues();

    var newMovie = Ext.create("thirdClassicTest.model.movieModel", formData);

    store.add(newMovie);

    store.sync({
      success: function () {
        Ext.Msg.alert("Success!", "Movie has been created successfully!");
        store.load();
      },
      failure: function () {
        Ext.Msg.alert("Failed :(", "Failed to create movie");
        store.load();
      },
    });
  },

  onDeleteMovie: function (btn) {
    var form = btn.up("window").down("form");
    var formData = form.getValues();
    var store = Ext.getStore("movieApiStore");

    var movieId = formData.movieId;
    var record = store.findRecord("movieId", movieId);
    record.setId(movieId);
    if (record) {
      record.erase({
        success: function () {
          Ext.Msg.alert("Record deleted successfully");
        },
        failure: function () {
          Ext.Msg.alert("Failed to delete record");
        },
      });
    } else {
      Ext.Msg.alert("Record not found");
    }
    store.load();
  },

  onCancel: function () {
    this.getView().destroy();
  },

  onUpdateCustomer: function (btn) {
    var form = btn.up("window").down("form");
    var formData = form.getValues();
    var store = Ext.getStore("customerApiStore");

    store.load({
      callback: function (success) {
        if (success) {
          var newCustomer = {
            customerId: formData.customerId,
            customerFirstName: formData.customerFirstName,
            customerLastName: formData.customerLastName,
            customerRentedMovies: formData.customerRentedMovies,
          };
          var record = store.findRecord("customerId", newCustomer.customerId);
          if (record) {
            record.set(newCustomer);

            store.sync({
              success: function () {
                Ext.Msg.alert("Record updated successfully");
              },
              failure: function () {
                Ext.Msg.alert("Failed to update record");
              },
            });
          } else {
            Ext.Msg.alert("Record not found");
          }
        } else {
          Ext.Msg.alert("Failed to load store");
        }
      },
    });
  },

  onAddCustomer: function (btn) {
    var form = btn.up("window").down("form");
    var store = Ext.getStore("customerApiStore");

    var formData = form.getValues();

    var newCustomer = Ext.create(
      "thirdClassicTest.model.customerModel",
      formData
    );

    store.add(newCustomer);

    store.sync({
      success: function () {
        Ext.Msg.alert("Success!", "Customer has been created successfully!");
        store.load();
      },
      failure: function () {
        Ext.Msg.alert("Failed :(", "Failed to create customer");
        store.load();
      },
    });
    store.load();
  },

  onDeleteCustomer: function (btn) {
    var form = btn.up("window").down("form");
    var formData = form.getValues();
    var store = Ext.getStore("customerApiStore");

    var customerId = formData.customerId;
    var record = store.findRecord("customerId", customerId);

    if (record) {
      record.setId(customerId);
      record.erase({
        success: function () {
          Ext.Msg.alert("Record deleted successfully");
        },
        failure: function () {
          Ext.Msg.alert("Failed to delete record");
        },
      });
    } else {
      Ext.Msg.alert("Record not found");
    }
    store.load();
  },

  onSearchMovie: function (btn) {
    var form = btn.up("window").down("form");
    var formData = form.getValues();
    var movieId = formData.movieId;

    var store = Ext.getStore("movieApiStore");
    store.load();
    store.clearFilter();
    store.filter("movieId", movieId);
    var movie = store.findRecord("movieId", movieId);

    var grid = btn.up("window").down("movieGridView");
    grid.setStore(store);

    if (movie) {
      Ext.Msg.alert("Movie Found!");
    } else {
      Ext.Msg.alert("Movie not found");
    }
  },
  onSearchCustomer: function (btn) {
    var form = btn.up("window").down("form");
    var formData = form.getValues();
    var customerId = formData.customerId;

    var store = Ext.getStore("customerApiStore");
    store.load();
    store.clearFilter();
    store.filter("customerId", customerId);
    var customer = store.findRecord("customerId", customerId);

    var grid = btn.up("window").down("customerGridView");
    grid.setStore(store);

    if (customer) {
      Ext.Msg.alert("Customer Found!");
    } else {
      Ext.Msg.alert("Customer not found");
    }
  },

  onSearchTransaction: function (btn) {
    var form = btn.up("window").down("form");
    var formData = form.getValues();
    var rentalId = formData.rentalId;

    var store = Ext.getStore("transactionApiStore");
    store.load();
    store.clearFilter();
    store.filter("rentalId", rentalId);
    var rental = store.findRecord("rentalId", rentalId);

    var grid = btn.up("window").down("transactionGridView");
    grid.setStore(store);

    if (rental) {
      Ext.Msg.alert("Transaction Found!");
    } else {
      Ext.Msg.alert("Movie not found");
    }
  },
  
  onAddTransaction: function (btn) {
    var form = btn.up("window").down("form");
    var transactionStore = Ext.getStore("transactionApiStore");
    var masterDetailStore = Ext.getStore("masterDetailApiStore");
    var movieStore = Ext.getStore("movieApiStore");
    var customerStore = Ext.getStore("customerApiStore");
  
    var formData = form.getValues();
  
    var referenceNumber = this.generateReferenceNumber();
  
    var newTransaction = Ext.create("thirdClassicTest.model.transactionModel", {
      movieId: formData.movieId,
      customerId: formData.customerId,
      rentalDate: formData.rentalDate,
      referenceNumber: referenceNumber, 
    });

    var newMasterDetail = Ext.create("thirdClassicTest.model.masterDetailModel", {
      customerId: formData.customerId,
      rentalDate: formData.rentalDate,
      referenceNumber: referenceNumber
    })


    masterDetailStore.add(newMasterDetail);
    transactionStore.add(newTransaction);
    masterDetailStore.sync();
    var movieId = formData.movieId;
    var customerId = formData.customerId;
  
    var movieRecord = movieStore.findRecord("movieId", movieId);
    var customerRecord = customerStore.findRecord("customerId", customerId);
  
    var movieStock = movieRecord.get("movieStock");
    var customerRentedMovies = customerRecord.get("customerRentedMovies");
  
    movieRecord.set("movieStock", movieStock - 1);
  
    customerRecord.set("customerRentedMovies", customerRentedMovies + 1);
  
    movieStore.sync();
    customerStore.sync();
  
    transactionStore.sync({
      success: function () {
        Ext.Msg.alert("Success!", "Transaction has been created successfully!");
      },
      failure: function () {
        Ext.Msg.alert("Failed :(", "Failed to create transaction");
      },
    });
  },
  

  onMultipleTransaction: function (btn) {
    var customerCombo = btn.up("window").down("combobox");
    var dateField = btn.up("window").down("datefield");
    var movieGrid = btn.up("window").down("gridpanel");
    var movieStore = Ext.getStore("movieApiStore");
    var customerStore = Ext.getStore("customerApiStore");
    var masterDetailStore = Ext.getStore("masterDetailApiStore");

    var form = btn.up("window").down("form");
    var formData = form.getValues();

  

    
    var selectedMovies = movieGrid.getSelectionModel().getSelection();
    var customerId = customerCombo.getValue();
    var rentalDate = dateField.getValue();
  
    var transactionStore = Ext.getStore("transactionApiStore");
  
    var referenceNumber = this.generateReferenceNumber();

    var newMasterDetail = Ext.create("thirdClassicTest.model.masterDetailModel", {
      customerId: formData.customerId,
      rentalDate: formData.rentalDate,
      referenceNumber: referenceNumber
    })
  
    masterDetailStore.add(newMasterDetail);

    masterDetailStore.sync();



    Ext.Array.each(selectedMovies, function (movie) {
      var transaction = Ext.create("thirdClassicTest.model.transactionModel", {
        movieId: movie.get("movieId"),
        customerId: customerId,
        rentalDate: rentalDate,
        referenceNumber: referenceNumber, 
      });
      transactionStore.add(transaction);
    });
  
    Ext.Array.each(selectedMovies, function (movie) {
      var movieId = movie.get("movieId");
      var movieRecord = movieStore.findRecord("movieId", movieId);
      var movieStock = movieRecord.get("movieStock");
      movieRecord.set("movieStock", movieStock - 1);
  
      var customerRecord = customerStore.findRecord("customerId", customerId);
      var customerRentedMovies = customerRecord.get("customerRentedMovies");
      customerRecord.set("customerRentedMovies", customerRentedMovies + 1);
    });
  
    movieStore.sync();
    customerStore.sync();

    transactionStore.sync({
      success: function () {
        Ext.Msg.alert(
          "Success",
          "Rental transactions created successfully with the same reference number: " + referenceNumber
        );
        transactionStore.load();
      },
      failure: function () {
        Ext.Msg.alert("Error", "Failed to create rental transactions.");
      },
    });
  },
  generateReferenceNumber: function () {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var length = 12;
    var result = "";
    var isUnique = false;
  
    while (!isUnique) {
    result = ""
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * chars.length);
      result += chars.charAt(randomIndex);

      
    }
    isUnique = this.isReferenceNumberUnique(Ext.getStore("transactionApiStore"), result);
    }
    return result;
  },
  isReferenceNumberUnique: function (store, referenceNumber) {
    var isUnique = true;
    store.each(function (record) {
      if (record.get("referenceNumber") === referenceNumber) {
        isUnique = false;
        return false; 
      }
    });
    return isUnique;
  },

  onReturnTransaction: function (btn) {
    var form = btn.up("window").down("form");
    var formData = form.getValues();
    var store = Ext.getStore("transactionApiStore");

    var movieStore = Ext.getStore("movieApiStore");
    var customerStore = Ext.getStore("customerApiStore");

    var rentalId = formData.rentalId;
    var record = store.findRecord("rentalId", rentalId);

    var movieId = record.get("movieId");
    var customerId = record.get("customerId");

    var movieRecord = movieStore.findRecord("movieId", movieId);
    var customerRecord = customerStore.findRecord("customerId", customerId);
    var movieStock = movieRecord.get("movieStock");
    var customerRentedMovies = customerRecord.get("customerRentedMovies");

    movieRecord.set("movieStock", movieStock + 1);

    customerRecord.set("customerRentedMovies", customerRentedMovies - 1);

    movieStore.sync();
    customerStore.sync();

    if (record) {
      record.setId(rentalId);
      record.erase({
        success: function () {
          Ext.Msg.alert("Failed to return movie");
        },
        failure: function () {},
      });
    } else {
      Ext.Msg.alert("Record not found");
    }
    store.load();
  },

 /* onReturnTransaction: function (btn) {
    var form = btn.up('window').down('form');
    var formData = form.getValues();
    var store = Ext.getStore('transactionApiStore');
    var historyStore = Ext.getStore('historyApiStore');
  
    var rentalId = formData.rentalId;
    var returnDate = formData.returnDate;
  
    var record = store.findRecord('rentalId', rentalId);
    if (!record) {
      Ext.Msg.alert('Record not found');
      return;
    }
  
    var movieId = record.get('movieId');
    var customerId = record.get('customerId');
  
    var movieStore = Ext.getStore('movieApiStore');
    var customerStore = Ext.getStore('customerApiStore');
  
    var movieRecord = movieStore.findRecord('movieId', movieId);
    var customerRecord = customerStore.findRecord('customerId', customerId);
  
    var movieStock = movieRecord.get('movieStock');
    var customerRentedMovies = customerRecord.get('customerRentedMovies');
  
    movieRecord.set('movieStock', movieStock + 1);
    customerRecord.set('customerRentedMovies', customerRentedMovies - 1);
  
    movieStore.sync();
    customerStore.sync();

   var existingHistoryRecord = historyStore.findRecord('rentalId', rentalId);
  
     if (existingHistoryRecord) {
      existingHistoryRecord.set('rentalReturn', returnDate);
  
      record.setId(rentalId)
      historyStore.sync({
        success: function () {
          record.erase({
            success: function () {
              Ext.Msg.alert('Success!', 'Movie returned successfully!');
            },
            failure: function () {
              Ext.Msg.alert('Failed :(', 'Failed to delete transaction record');
            },
          });
          store.load();
        },
        failure: function () {
          Ext.Msg.alert('Failed :(', 'Failed to update history.');
        },
      }); }
     else {
      Ext.Msg.alert('History Record not found');
    }
  },*/
  

  updateHistory: function () {
    var transactionStore = Ext.getStore("transactionApiStore");
    var historyStore = Ext.getStore("historyApiStore");

    transactionStore.each(function (transactionRecord) {
      var rentalId = transactionRecord.get("rentalId");
      var movieId = transactionRecord.get("movieId");
      var customerId = transactionRecord.get("customerId");
      var rentalDate = transactionRecord.get("rentalDate");

      var existingRecord = historyStore.findRecord("rentalId", rentalId);

      if (!existingRecord) {
        var newHistoryRecord = transactionRecord.clone();
        newHistoryRecord.set("rentalId", rentalId); 
        newHistoryRecord.set("movieId", movieId); 
        newHistoryRecord.set("customerId", customerId); 
        newHistoryRecord.set("rentalBorrow", rentalDate); 

        newHistoryRecord.phantom = true;


        historyStore.add(newHistoryRecord);
      }
      else{
        Ext.Msg.alert("no new record")
      }
    });

    historyStore.sync();
  },

  onDeleteHistory: function (btn) {
    var form = btn.up("window").down("form");
    var formData = form.getValues();
    var store = Ext.getStore("historyApiStore");

    var historyId = formData.historyId;
    var record = store.findRecord("historyId", historyId);
    record.setId(historyId);
    if (record) {
      record.erase({
        success: function () {
          Ext.Msg.alert("Record deleted successfully");
        },
        failure: function () {
          Ext.Msg.alert("Failed to delete record");
        },
      });
    } else {
      Ext.Msg.alert("Record not found");
    }
    store.load();
  },
});
