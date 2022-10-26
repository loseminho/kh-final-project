package kr.or.market.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import kr.or.market.model.service.MarketService;

@Controller
public class MarketController {
	@Autowired
	private MarketService service;
}
