package com.fan;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/fancontrol")
public class FanControl {
	public static final int MAX = 3;
	public static final int MIN = 0;
	@GET
	@Produces(MediaType.APPLICATION_JSON)
    @Path("/increase/{currentSpeed}")
    public String increase(@PathParam("currentSpeed") String currentSpeed) {
		try{
			int speed = Integer.valueOf(currentSpeed);
	        if (speed == MAX){
	        	return String.valueOf(MIN);
	        }else{
	        	return String.valueOf(++speed);
	        }
		}catch(Exception ex){
			return "-1";
		}
		
    }
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
    @Path("/decrease/{currentSpeed}")
    public String decrease(@PathParam("currentSpeed") String currentSpeed) {
		int speed = Integer.valueOf(currentSpeed);
	   if (speed == MIN){
        	return String.valueOf(MAX);
        }else{
        	return String.valueOf(--speed);
        }
    }
}
