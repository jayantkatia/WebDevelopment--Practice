<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AjaxAuth</title>
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#" data-toggle="modal" data-target="#exampleModal">AjaxAuth.tech</a>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <button type="button" class="btn btn-primary  ml-5" data-toggle="modal" data-target="#signUp">
                        Sign Up
                    </button>
                </li>
                <li class="nav-item">
                    <button type="button" class="btn btn-primary ml-5" data-toggle="modal" data-target="#logIn">
                        Log In
                    </button>
                </li>
            </ul>
        </div>
    </nav>

    <div class="modal" tabindex="-1" role="dialog" id="signUp">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Sign Up</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="process/signUp.php" method="POST" enctype="multipart/form-data">
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" name="email" required>
                            <span id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                                else.</span>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" name="password" id="password" required>
                        </div>
                        <div class="form-group">
                            <label for="mobile">Mobile Number</label>
                            <input type="number" class="form-control" id="mobile" name="mobile" required>
                        </div>
                        <div class="form-group">
                            <label for="pic">Upload Pic</label>
                            <input type="file" class="form-control-file" id="pic" name="pic">
                        </div>

                        <button type="submit" id="signUpSubmit" class="btn btn-primary">Submit</button>
                        <span id="signUpHelp" class="form-text text-muted"></span>
                    </form>
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>


    <div class="modal" tabindex="-1" role="dialog" id="logIn">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Log In</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="prev"></div>
                    <form>

                        <div class="form-group">
                            <label for="emailL">Email address</label><i class="ml-3 fa " id="tick"></i>
                            <input type="email" class="form-control" id="emailL" name="email" required>
                            <span id="emailHelpL" class="form-text text-muted">We'll never share your email with anyone
                                else.</span>
                        </div>
                        <div class="form-group">
                            <label for="passwordL">Password</label>
                            <input type="password" class="form-control" name="password" id="passwordL" required>
                            <a href="#" data-toggle="modal" data-dismiss="modal" data-target="#forgotPassword">Forgot Password?</a>
                        </div>

                        <button type="submit" id="logInSubmit" class="btn btn-primary">Submit</button>
                        <span id="logInHelp" class="form-text"></span>
                    </form>
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>

    <div class="modal" tabindex="-1" role="dialog" id="forgotPassword">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Forgot Password ?</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="emailP">Email address</label>
                            <input type="email" class="form-control" id="emailP" name="email">
                        </div>
                        <div class="form-group">
                            <label for="passwordP">Password</label>
                            <input type="text" readonly class="form-control" name="password" id="passwordP">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>

    <h3 class="text-success font-weight-bold">
        <?php 
            if(!empty($_GET['msg'])){
            echo $_GET['msg'] ; }   
        ?>
    </h3>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
    <script src="process/ajaxHandler.js"></script>
</body>

</html>