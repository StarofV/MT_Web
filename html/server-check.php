<?php
    function pingDomain($domain){
    $file      = fsockopen ($domain, 25565, $errno, $errstr, 10);
    $status = false;

    if (!$file)
        $status = false;  // Site is down
        else {
            fclose($file);
            $status = true;
        }
        return $status;
    }

    echo(pingDomain("mc.mortuusterra.com"));
?>